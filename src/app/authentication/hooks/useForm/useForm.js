import { useState } from "react";

const useForm = ({ fields, validation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [data, setData] = useState(() => {
    const initialData = {};

    fields.forEach((field) => {
      initialData[field] = "";
    });

    return initialData;
  });

  const onChange = (field) => (event) => {
    setData((previousData) => ({
      ...previousData,
      [field]: event.target.value,
    }));
  };

  const onSubmit = (handleSubmit) => (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    const hasError = Object.keys(error).length > 0;
    if (hasError) {
      return;
    }

    handleSubmit();
  };

  const error = {};
  Object.keys(validation).forEach((key) => {
    const result = validation[key](data[key]);

    if (!result) {
      return;
    }

    error[key] = result;
  });

  return {
    onChange,
    data,
    onSubmit,
    isSubmitted,
    error,
  };
};

export default useForm;
