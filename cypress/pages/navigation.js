const navigationBar = {
  pageList: {
    getByIndex: (index) => {
      if (index > 5 || index < 1) {
        cy.log("Index for navigation bar getByIndex must be between 1 and 5");
        return;
      }

      const getter =
        index === 5
          ? `#inbox-list > :nth-child(${index + 1})`
          : `:nth-child(${index + 1}) > .mt-2`;
      cy.get(getter);
    },
  },
};

export default navigationBar;
