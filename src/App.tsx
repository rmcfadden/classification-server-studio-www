import type { Component } from "solid-js";
import { ServerView } from "./ServerView";

const App: Component = () => {
  return (
    <div class="h-screen flex flex-col">
      <header class="flex h-10 min-h-0 bg-gray-200">Header</header>
      <div class="flex flex-row flex-1 bg-gray-100 min-h-0">
        <div class="flex flex-col w-52 bg-yellow-100 h-full">
          <ServerView />
        </div>
        <div class="flex flex-1 p-1 overflow-auto">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique hac
          penatibus nec fringilla pulvinar. Curae mauris rhoncus porttitor;
          maecenas porttitor ridiculus pellentesque. Vivamus pretium rutrum
          metus convallis ad taciti. Mus in luctus laoreet tellus in arcu. Est
          iaculis nam in blandit; tellus vulputate nisl. Adipiscing parturient
          maecenas class curae habitasse lobortis. Aliquet id facilisis
          fermentum lobortis orci nisi vitae. Rhoncus aliquam congue risus
          praesent dignissim condimentum aliquet. Id vehicula malesuada eleifend
          mauris; etiam facilisi fringilla maximus consequat. Faucibus dignissim
          condimentum tempus elementum ante vestibulum. Iaculis taciti cursus at
          neque quis ridiculus dapibus. Urna arcu erat; scelerisque posuere
          habitasse nunc. Potenti sed dictum sociosqu odio dictumst dictum.
          Morbi integer dolor ac magnis mi. Leo bibendum aptent senectus, mollis
          ornare gravida sollicitudin rhoncus. Varius neque magnis lacinia
          habitasse ex viverra. Nisi amet massa proin nostra enim malesuada
          tempor? Odio sed vel inceptos primis laoreet penatibus bibendum amet
          risus. Odio dolor ullamcorper tortor; morbi non vestibulum etiam
          cubilia. Id turpis dapibus condimentum, risus in eu. Eleifend pretium
          at hendrerit aliquet eu tortor tincidunt euismod. Nibh ante morbi
          habitasse phasellus non adipiscing? Convallis dignissim volutpat morbi
          nisi platea eros mollis. Pharetra in elit pellentesque hac urna
          aliquet. Massa parturient tincidunt purus cubilia montes convallis
          eleifend tristique. Adapibus class magnis amet et magna. Ac nulla
          habitasse conubia fusce quam felis rhoncus libero. Dignissim
          condimentum aenean molestie scelerisque quis. Dui feugiat metus metus
          pulvinar nibh; tempor maximus litora sodales. Malesuada nullam id
          commodo nisi libero blandit. Consequat porttitor elit nunc integer
          ridiculus habitasse nibh sollicitudin. Suscipit cubilia fusce litora;
          lacus integer nec. Condimentum porta lobortis dignissim praesent
          commodo justo nunc. Curabitur faucibus condimentum imperdiet accumsan
          magna class, lacinia cras. Fringilla diam finibus dictum; ridiculus
          natoque nulla. Nascetur erat turpis ligula praesent magna. Habitant
          habitant integer et at vivamus finibus. Ultricies neque ac vestibulum
          suscipit auctor ut. Quisque facilisi ridiculus morbi varius, leo
          dapibus semper tempor. Magnis quis tempor massa turpis convallis
          dictumst; dictum ridiculus venenatis? Etiam elit nec vulputate montes
          penatibus tempor ut pretium. Duis ut diam proin porta suspendisse
          lobortis mus. Venenatis himenaeos dictumst ultrices lectus luctus odio
          praesent. Finibus curabitur senectus parturient ultricies sem
          ullamcorper a. Cubilia dictum class mi lacus phasellus taciti.
          Condimentum penatibus cursus aptent efficitur aptent nisl nam massa.
          Ridiculus euismod ligula nisl efficitur laoreet. Dolor nibh auctor
          rhoncus egestas mus nec. Tempor tristique et quis tempus litora; sem
          condimentum aliquet. Quis quis quisque potenti phasellus dapibus
          fames. Risus ipsum ut pretium praesent praesent dui nisi ligula. Dis
          sapien tempus varius sollicitudin blandit rutrum class vulputate
          platea. Luctus finibus torquent rhoncus feugiat lobortis at orci
          malesuada. Ante egestas maximus velit libero sollicitudin augue.
          Malesuada sapien sem imperdiet tincidunt nibh interdum. Congue posuere
          phasellus facilisi mauris arcu vulputate. Proin ullamcorper a duis
          nunc fusce finibus fames. Dui potenti hendrerit augue dolor mus cras.
          Congue dignissim amet sollicitudin dictumst nisi. Dictum hendrerit nec
          in accumsan, imperdiet taciti dapibus est. Potenti hac dolor aliquam
          metus facilisi elementum auctor eget diam. Feugiat fames pharetra
          integer mauris cursus molestie integer fermentum. Duis venenatis vel
          suspendisse placerat senectus vivamus purus; venenatis ridiculus. Quis
          penatibus suspendisse ex senectus urna quisque. Potenti sem netus
          vitae augue sed. Donec phasellus phasellus dis egestas dis elementum
          aenean. Vestibulum ultricies senectus ridiculus parturient quisque
          nibh. Posuere ac pretium maecenas, ex tellus dolor conubia. Rutrum
          felis porta tellus fames pulvinar sem; torquent porttitor? Arcu diam
          litora aptent ridiculus tincidunt mattis. Sodales habitasse ad quam
          penatibus dignissim. Urna luctus condimentum id varius lobortis eget
          potenti? Ultricies pellentesque mollis nec mollis pretium sapien.
          Quisque parturient nullam pharetra nibh et phasellus, nisl proin.
          Condimentum primis consectetur vestibulum non convallis neque. Quis
          faucibus sagittis dui cubilia rutrum faucibus?
        </div>
      </div>

      <footer class="flex h-10 bg-grag-200">Footer</footer>
    </div>
  );
};

export default App;
