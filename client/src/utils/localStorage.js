export const getSavedSubscriptionIds = () => {
  const savedSubscriptionIds = localStorage.getItem("saved_subscriptions")
    ? JSON.parse(localStorage.getItem("saved_subscriptions"))
    : [];

  return savedSubscriptionIds;
};

export const saveSubscriptionIds = (SubscriptionIdArr) => {
  if (SubscriptionIdArr.length) {
    localStorage.setItem("saved_subscriptions", JSON.stringify(SubscriptionIdArr));
  } else {
    localStorage.removeItem("saved_subscriptions");
  }
};

export const removeSubscriptionId = (SubscriptionId) => {
  const savedSubscriptionIds = localStorage.getItem("saved_subscriptions")
    ? JSON.parse(localStorage.getItem("saved_subscriptions"))
    : null;

  if (!savedSubscriptionIds) {
    return false;
  }

  const updatedSavedSubscriptionIds = savedSubscriptionIds?.filter(
    (savedSubscriptionId) => savedSubscriptionId !== SubscriptionId
  );
  localStorage.setItem("saved_subscriptions", JSON.stringify(updatedSavedSubscriptionIds));

  return true;
};
