function Snack({ snack }) {
  const images = {
    chips:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHBZ2ZExFUA_J1nhPVWT35GN9lJ322e3BYDUHlgVS31txVmGA-vmhNXUrWb6ByiicvPEFHdUAj8c&usqp=CAU&ec=48600112",
    chocolate:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhCZNhxmv6SU_5HxIF_A3jkQJ13AopqACygPDLIB9jA&usqp=CAU&ec=48600112",
    candy:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9lSjT0Iu_uG1JesqEF-uVL2hHy3HNwUACdYF1pIsxA&usqp=CAU&ec=48600112",
  };
  return (
    <div>
      <div>
        <a href="/">Home</a>
      </div>
      <img src={images[snack]} />
    </div>
  );
}

export default Snack;
