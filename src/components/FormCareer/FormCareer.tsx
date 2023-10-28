"use client";

import { Controller, useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  fullName: string;
  email: string;
  position: string;
  tel: string;
  textarea: string;
  accept: string;
}

const FormCareer = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <p
        className="w-[179px] ml-auto mb-[36px] text-[14px] leading-[20px] font-extralight
      | min-[768px]:w-[222px] min-[768px]:mb-[18px] min-[768px]:ml-0 min-[768px]:mt-[98px]
      | min-[1280px]:mt-0 min-[1280px]:text-[18px] min-[1280px]:leading-[24px] min-[1280px]:w-[234px]"
      >
        Don't miss your opportunity! Fill out the form right now and join our
        team!
      </p>
      <form
        className="w-full 
        | min-[768px]:h-[318px]
        | min-[1280px]:flex min-[1280px]:flex-col min-[1280px]:h-[380px]"
        autoComplete="false"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="
        | min-[768px]:flex min-[768px]:justify-between min-[768px]:mb-[18px]
        | min-[1280px]:mb-auto"
        >
          <div
            className="flex flex-col w-full mb-[0px]
            | min-[768px]:w-[222px]
            | min-[1280px]:w-[290px]"
          >
            <label
              className="mb-[12px] text-[12px] leading-[24px] font-extralight tracking-[.2em] relative
            | min-[768px]:mb-[16px]
            | min-[1280px]:mb-[28px]"
            >
              Full name
              <input
                className="w-full h-[24px] px-2 outline-0 text-[13px] bg-white/5
                | min-[1280px]:h-[28px] min-[1280px]:text-[20px]"
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
            | min-[1280px]:mb-[28px]"
            >
              E-mail
              <input
                className="w-full h-[24px] px-2 outline-0 text-[13px] bg-white/5
                | min-[1280px]:h-[28px] min-[1280px]:text-[20px]"
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

            <label
              className="mb-[12px] text-[12px] leading-[24px] font-extralight tracking-[.2em]
            | min-[768px]:mb-[16px]
            | min-[1280px]:mb-[28px]"
            >
              Position
              <input
                className="w-full h-[24px] px-2 outline-0 text-[13px] bg-white/5
                | min-[1280px]:h-[28px] min-[1280px]:text-[20px]"
                type="text"
                placeholder="Movie maker"
                {...register("position")}
              />
            </label>

            <label
              className="mb-[12px] text-[12px] leading-[24px] font-extralight tracking-[.2em] relative
            | min-[768px]:mb-0"
            >
              Phone
              <input
                className="w-full h-[24px] pl-10 pr-2 outline-0 text-[13px] bg-white/5
                | min-[1280px]:h-[28px] min-[1280px]:text-[20px] min-[1280px]:pl-[56px]"
                type="tel"
                placeholder="(097) 12 34 567"
                {...register("tel", {
                  required: true,
                  pattern: /^\(\d{3}\)\d{7}$/,
                })}
                aria-invalid={errors.tel ? "true" : "false"}
              />
              <span
                className="absolute top-6 left-2 text-[13px]
              | min-[1280px]:text-[20px] min-[1280px]:top-7"
              >
                +38
              </span>
              {errors.tel && (
                <p
                  className="absolute right-0 translate-y-[-4px] text-red-600"
                  role="alert"
                >
                  Incorrect phone
                </p>
              )}
            </label>
          </div>

          <label
            className="mb-[50px] text-[12px] leading-[24px] font-extralight tracking-[.2em]
          | min-[768px]:w-[222px] min-[768px]:mb-0
          | min-[1280px]:w-[292px]"
          >
            Message
            <textarea
              className="w-full h-[196px] px-2 resize-none outline-0 text-[13px] bg-white/5 
              | min-[768px]:h-[220px]
              | min-[1280px]:h-[272px] min-[1280px]:text-[20px]"
              {...register("textarea")}
            />
          </label>
        </div>

        <div
          className="flex flex-col w-full
        | min-[768px]:flex-row"
        >
          <Controller
            name="accept"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <label className="flex items-baseline">
                <span
                  className="w-[22px] h-[22px] p-[2px] mr-[10px] border text-transparent inline-flex self-baseline
                  |min-[768px]:border-[2px]
                  |min-[1280px]:w-[24px] min-[1280px]:h-[24px] min-[1280px]:border-[3px]"
                >
                  <span
                    className={`w-full h-full checked:bg-transparent ${
                      field.value ? "bg-white" : "bg-white/10"
                    }`}
                  />
                </span>
                <span
                  className="w-[350px] text-[12px] leading-[22px]
                | min-[768px]:w-[192px]
                | min-[1280px]:leading-[24px] min-[1280px]:w-[258px]"
                >
                  I confirm my consent to the processing of personal data.
                </span>
                <input className="appearance-none" type="checkbox" {...field} />
              </label>
            )}
          />

          <button
            className="text-[30px] leading-[36px] font-medium ml-auto
          | min-[1280px]:text-[32px] min-[1280px]:leading-[38px]"
          >
            SEND
          </button>
        </div>
      </form>
    </>
  );
};

export default FormCareer;
