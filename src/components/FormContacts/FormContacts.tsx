"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  fullName: string;
  email: string;
  textarea: string;
}

const FormContacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<IFormInput>({
    defaultValues: {
      fullName: "",
      email: "",
      textarea: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        fullName: "",
        email: "",
        textarea: "",
      });
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <form
      className="w-full 
        | min-[768px]:h-[318px] min-[768px]:flex
        | min-[1280px]:flex min-[1280px]:flex-col min-[1280px]:h-[361px] min-[1280px]:w-[608px]"
      autoComplete="false"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className="
        | min-[768px]:flex min-[768px]:justify-between min-[768px]:mr-[20px]
        | min-[1280px]:mb-auto min-[1280px]:mr-0 min-[1280px]:"
      >
        <div
          className="flex flex-col w-full mb-[0px]
            | min-[768px]:w-[222px]
            | min-[1280px]:w-full min-[1280px]:flex-row min-[1280px]:justify-between"
        >
          <label
            className="mb-[12px] text-[12px] leading-[24px] font-extralight tracking-[.2em] relative
            | min-[768px]:mb-[16px]
            | min-[1280px]:mb-0 min-[1280px]:w-[293px] min-[1280px]:mr-[20px]"
          >
            Full name
            <input
              className="w-full h-[24px] px-2 outline-0 text-[13px] bg-white/5
                | min-[1280px]:h-[28px] min-[1280px]:text-[20px] min-[1280px]:w-[293px]"
              type="text"
              placeholder="John Smith"
              {...register("fullName", {
                required: true,
                maxLength: 50,
                minLength: 2,
              })}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName && (
              <p
                className="absolute right-0 translate-y-[-4px] text-red-600"
                role="alert"
              >
                Incorrect name
              </p>
            )}
          </label>

          <label
            className="mb-[12px] text-[12px] leading-[24px] font-extralight tracking-[.2em] relative
            | min-[768px]:mb-[16px]
            | min-[1280px]:mb-0"
          >
            E-mail
            <input
              className="w-full h-[24px] px-2 outline-0 text-[13px] bg-white/5
                | min-[1280px]:h-[28px] min-[1280px]:text-[20px] min-[1280px]:w-[293px]"
              type="text"
              placeholder="johnsmith@email.com"
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p
                className="absolute right-0 translate-y-[-4px] text-red-600"
                role="alert"
              >
                Invalid email
              </p>
            )}
          </label>
        </div>
      </div>

      <div
        className="flex flex-col w-full
        | min-[768px]:flex-col"
      >
        <label
          className="mb-[50px] text-[12px] leading-[24px] font-extralight tracking-[.2em]
          | min-[768px]:w-[222px] min-[768px]:mb-[12px]
          | min-[1280px]:w-full"
        >
          Message
          <textarea
            className="w-full h-[193px] px-2 resize-none outline-0 text-[13px] bg-white/5 
              | min-[768px]:h-[220px] min-[768px]:w-[463px]
              | min-[1280px]:h-[174px] min-[1280px]:w-full min-[1280px]:text-[20px]"
            {...register("textarea")}
          />
        </label>

        <button
          className="text-[30px] leading-[36px] font-medium ml-auto
          | min-[1280px]:text-[32px] min-[1280px]:leading-[38px]"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default FormContacts;
