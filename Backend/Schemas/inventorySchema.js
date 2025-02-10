export const createinventorySchema = {
  paint_id: {
    notEmpty: { errorMessage: "paint_id shouldn't be empty" },
    isString: { errorMessage: "paint_id should be a string" },
    isLength: {
      options: {
        min: 4,
      },
      errorMessage: "name should be atleast 4 characters",
    },
  },
  name: {
    notEmpty: { errorMessage: "name shouldn't be empty" },
    isString: { errorMessage: "name should be a string" },
    isLength: {
      options: {
        min: 4,
      },
      errorMessage: "name should be atleast 4 characters",
    },
  },
  brand: {
    notEmpty: { errorMessage: "brand shouldn't be empty" },
    isString: { errorMessage: "brand shouldn't be a string" },
    isLength: {
      options: {
        min: 4,
      },
      errorMessage: "brand should be atleast 4 characters",
    },
  },
  color: {
    notEmpty: { errorMessage: "color shouldn't be empty" },
    isString: { errorMessage: "color should be a string" },
    isLength: {
      options: {
        min: 4,
      },
      errorMessage: "color should be atleast 4 characters",
    },
  },
  notes: {
    notEmpty: { errorMessage: "name shouldn't be empty" },
    isString: { errorMessage: "name shouldn't be a string" },
    isLength: {
      options: {
        max: 100,
      },
      errorMessage: "name shouldn't be bigger than 100 characters",
    },
  },
};
