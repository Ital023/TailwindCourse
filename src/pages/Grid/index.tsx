export default function Grid() {
  return (
    <main>
      <div className="grid bg-red-300 grid-cols-3">
        <div className="bg-red-600">1</div>
        <div className="bg-red-600">2</div>
        <div className="bg-red-600">3</div>
        <div className="bg-red-600">4</div>
      </div>

      <div className="grid bg-green-300 grid-cols-2">
        <div className="bg-green-600">1</div>
        <div className="bg-green-600">2</div>
        <div className="bg-green-600">3</div>
      </div>

      <div className="grid bg-purple-300 grid-cols-3">
        <div className="bg-purple-800">1</div>
        <div className="bg-purple-500">2</div>
        <div className="bg-purple-800">3</div>
        <div className="bg-purple-500">4</div>
        <div className="bg-purple-800">5</div>
        <div className="bg-purple-500">6</div>
        <div className="bg-purple-800">7</div>
        <div className="bg-purple-500">8</div>
        <div className="bg-purple-800">9</div>
      </div>

      {/* TAMANHO DAS COLUNAS GRID */}
      <div className="grid grid-cols-6 m-2">
        <div className="col-span-1 bg-yellow-500">
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="col-span-5 bg-blue-400">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci tempore perspiciatis similique, explicabo nam provident amet non doloribus corporis iusto culpa a accusamus quasi beatae dolorum quos distinctio incidunt minima, reprehenderit neque ab cum. Hic commodi non dicta eum nisi! Vero nihil ducimus iste alias officiis minus rem, soluta nesciunt, beatae cumque blanditiis autem? Itaque, quisquam fugiat. Exercitationem dolores accusantium facere quae rerum. Possimus excepturi est tenetur dolorem nostrum? Dolorem, maiores impedit animi ullam velit laboriosam, quis veniam sapiente libero hic sed accusamus sint facere, ea et. Illo quos placeat fugiat perspiciatis asperiores ab saepe inventore distinctio. Natus, debitis?</p>
        </div>
      </div>

      <div className="grid grid-cols-4 m-2">

        <div className="col-span-4 bg-red-900">
          <p>Barra de navegacao</p>
        </div>

        <div className="col-span-1 bg-red-700">
          <p>Barra lateral esquerda</p>
        </div>

        <div className="col-span-2 bg-red-400">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius atque magni sint, reiciendis molestiae modi nostrum labore quis quae sequi animi, accusamus corporis ipsam commodi dolore sunt voluptas quia tenetur voluptates voluptatem consequatur? Deserunt dolorum delectus quia quidem magni laudantium tempora, ea molestiae repudiandae mollitia ipsa atque consectetur similique distinctio in quibusdam corporis totam ut repellendus suscipit doloremque harum. Reprehenderit explicabo ducimus doloremque provident voluptatum deleniti odio quae? Voluptates provident fugit dignissimos, quae non debitis at corrupti suscipit rem pariatur laborum fuga rerum, eaque atque porro harum, perferendis quasi accusantium architecto autem consequatur veritatis illum ea cumque! Magnam tenetur iure aut delectus rem ea. Accusamus mollitia, vero quos reiciendis sapiente necessitatibus neque amet dolores, impedit ea, exercitationem veritatis tempora quas adipisci voluptatum nam commodi corrupti vel alias quo at magnam fugiat labore laboriosam. Quam, commodi? Cupiditate accusamus temporibus animi deleniti iusto repellendus quam aliquid recusandae! Sequi fugiat libero repudiandae dolores dolorem amet, iure vero, eius maxime a explicabo at aliquam suscipit error quod exercitationem nisi ex unde tenetur quo voluptatibus maiores. Ipsum ipsa quibusdam non placeat possimus perspiciatis repellendus cupiditate minima maxime quia error, doloremque amet sequi! Unde ad aliquam commodi laborum nisi eligendi, id saepe ullam explicabo odit? Minus eaque dolorem sed, ipsam, laborum dignissimos doloremque animi veritatis incidunt asperiores culpa, in maiores quod? Et nisi accusamus atque ratione laboriosam eaque omnis quis ducimus doloribus vitae magni quae, unde iste, qui consectetur minima debitis assumenda voluptas eos consequuntur sequi corrupti incidunt. In assumenda numquam id eum ut nulla nihil!</p>
        </div>

        <div className="col-span-1 bg-red-700">
          <p>Barra lateral direita</p>
        </div>

        <div className="col-span-4 bg-red-900">
          <p>Footer</p>
        </div>
      </div>

      
    </main>
  );
}
