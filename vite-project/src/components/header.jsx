export default function Header({ name }) {
  return (
    <>
      <h1 className="heading text-xl sm:text-3xl font-bold  uppercase text-center my-5">
        Belajar react bareng WPU🚀
      </h1>
      <img src={name ? name : "react1.png"} alt="" className="mx-auto" />
      <p
        onClick={(e) => {
          alert("ok!");
        }}
        className="text-sm sm:text-lg font-bold  uppercase text-center underline text-sky-500 cursor-pointer my-5"
      >
        Yuk belajar React
      </p>
    </>
  );
}
