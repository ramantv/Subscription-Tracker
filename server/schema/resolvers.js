const { AuthenticationError } = require('apollo-server-express');
const { User, Courses, Lesson } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    users: async () => {
      return User.find().select('-__v -password');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          args,
          { new: true }
        );
        return updatedUser;
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }
};

module.exports = resolvers;
