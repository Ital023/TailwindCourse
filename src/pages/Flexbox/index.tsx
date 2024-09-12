export default function Flexbox() {
  return (
    // WRAP
    // <div className="flex flex-wrap bg-red-300">
    //   <div className="bg-red-200 p-6 m-3">1</div>
    //   <div className="bg-red-300 p-6 m-3">2</div>
    //   <div className="bg-red-400 p-6 m-3">3</div>
    //   <div className="bg-red-500 p-6 m-3">4</div>
    //   <div className="bg-red-600 p-6 m-3">5</div>
    //   <div className="bg-red-700 p-6 m-3">6</div>
    // </div>

    //Ocupa o seu tamanho total possivel
    <div className="flex bg-green-400 p-8">
        <div className="flex-1 bg-green-800">1</div>
        <div className="flex-1 bg-green-600">1</div>
        <div className="flex-none bg-green-600">1</div>
    </div>
  );
}
