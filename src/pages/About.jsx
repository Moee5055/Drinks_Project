import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About us";
  });
  return (
    <section className="mx-auto w-[90%] mt-[5rem] md:w-3/6">
      <h1 className="text-center font-bold text-[2rem] mb-[4rem]">About us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime vero,
        illo esse ducimus non praesentium iste sapiente obcaecati ipsa ad
        dolorum, ipsum molestiae modi delectus voluptatum enim recusandae autem!
        Repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Obcaecati nobis nisi iusto iste veniam beatae quidem a adipisci maxime
        possimus?
      </p>
    </section>
  );
}
