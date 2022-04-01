

const FaqPricing = () => {
  return (
    <div className="w-[90vw] m-auto">
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-blue-primary text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold text-dark-gray leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-lighter-gray">
            <details>
              <summary className="py-2 outline-none text-dark-gray cursor-pointer focus:text-blue-primary">
                Optio maiores eligendi molestiae totam dolores similique?
              </summary>
              <div className="px-4 pb-4 text-light-gray">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  neque in fugiat magni, quas animi enim veritatis deleniti ex.
                  Impedit.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none text-dark-gray cursor-pointer focus:text-blue-primary">
                Modi dolorem veritatis culpa quos consequuntur beatae itaque
                excepturi perspiciatis?
              </summary>
              <div className="px-4 pb-4 text-light-gray">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  aspernatur quae, eos explicabo odit minima libero veniam
                  similique quibusdam doloribus facilis ipsa accusantium vel
                  maiores corrupti! Libero voluptate a doloribus?
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none text-dark-gray cursor-pointer focus:text-blue-primary">
                Magni reprehenderit possimus debitis?
              </summary>
              <div className="px-4 pb-4 text-light-gray space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure,
                  voluptatibus autem eaque unde possimus quae.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPricing;
