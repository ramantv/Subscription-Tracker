const { AuthenticationError } = require('apollo-server-express');
const { User, Service } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-__v -password');
    },

    user: async (parent, { _id }) => {
      const user = await User.findOne({ _id: _id });

      return user;
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    services: async () => {
      return Service.find();
    },

    service: async (parent, { _id }) => {
      const service = await Service.findOne({ _id: _id });

      return service;
    },
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

    createService: async (parent, serviceObj) => {
      const service = await Service.create(serviceObj);

      return service;
    },

    deleteService: async (parent, { _id }) => {
      const service = await Service.findOneAndDelete({ _id });

      return { message: 'Service Deleted', service: service };
    },

    updateService: async (parent, { _id, ...serviceObj }) => {
      const service = await Service.findOneAndUpdate(
        { _id: _id },
        { ...serviceObj },
        { new: true }
      );

      return service;
    },
  },
};

module.exports = resolvers;
