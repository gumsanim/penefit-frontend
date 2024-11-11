type ValidationTargetKeys = "id" | "password";

const validationActions: { [key in ValidationTargetKeys]: () => void } = {
  id: () => {},
  password: () => {},
};

const useValidation: () => void = () => {
  const validationCheck = (
    target: ValidationTargetKeys,
    value: string,
    regexp: RegExp,
  ) => {
    if (!value.match(regexp)) {
      return validationActions[target]();
    }
  };

  return {
    validationCheck,
  };
};

export default useValidation;
