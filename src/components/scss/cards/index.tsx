import React from "react";

import styles from "./index.module.scss";
import data from "@public/meta.json";
import { Card } from "@components/scss";

export const Cards: React.FC = () => {
  return (
    <div className={styles.cards}>
      {(data?.plugins ?? []).map((plugin) => (
        <div key={`key-${plugin.name}`} className={styles.cardWrapper}>
          <Card title="What is it  ?">
            
          <p>  La República de la Montaña se manifestó gracias al cataclismo social de Chile en octubre del 2019. La falla de San Ramón sacudió sus placas tectónicas de la eterna transición liberaron la energía acumulada desde hace más de 500 años, desde que el invasor pisó este territorio, distorsionando el baile de las abejas, el curso de los ríos, la existencia de los humedales. Desde que comenzó a destruir los campos sagrados, a extraer todo lo que podía venderse; el salitre, el cobre y el oro,  contaminar los salares para extraer el litio, a cubrir tierra fértil con relave minero.
          </p> <p>
La República de la Montaña se constituye como una micronación utópica, descentralizada e intangible, que activa una aparición efímera desde los faldeos de los Andes hacia los límites de nuestra percepción. La República de la Montaña radica en la mitad de la ciudad y en el fondo del mar. La presencia de la montaña se convierte en una provocación a explorar, a recorrer su territorio desconocido, inexplorado, negado por la continua distracción de la máquina medial. En la República de la Montaña es posible poner en práctica la transformación de nuestra forma de acción colectiva, algo que el sabio pueblo mapuche conoce como "Kume Mogen", o Buen Vivir, invitando a vivir una forma de relación equilibrada entre las personas y su entorno, donde el vértigo colectivo se detiene como el final de una danza macabra.
</p> <p>
En la República de la Montaña el bienestar de todos los seres vivos radica en nuestra capacidad como humanos para hundir una actitud colonialista, enajenante y destructiva, donde la acumulación de capital configura una especie de demencia colectiva. Decrecer, desacelerar, respirar. La República de la Montaña reside en nuestro inconsciente colectivo, y la forma de acceder a su territorio es mediante la meditación, la entonación de una sintonía común, en la cual nos encontramos con nuestra propia memoria, acciones y experiencias. En la República de la Montaña la ascensión ocurre hacia adentro, el viaje hacia una introspección absoluta, donde la transformación se manifiesta desde el reconocimiento de nuestro ser líquido, mutante y mutable, desde la observación de la distancia y perspectiva del territorio interno, donde la conformación de una geografía constituida por la intangibilidad de nuestra memoria. 
</p> <p>
La República de la Montaña es electromagnética, noosférica, un cuerpo sin órganos donde sus habitantes se desplazan como cuerpos energéticos sin límites, fundiéndose entre sí, en una vibración eterna, donde la energía y materia oscura son la fuente principal que estructura su topología. En La República de la Montaña las vibraciones de nuestra existencia rebotan entre las quebradas de su volumen, se filtran hacia su centro y nos convierte en ella misma. 
</p> <p>
En la república de la montaña 
Declaramos a la madre tierra gran protectora de todos sus habitantes.
Buscamos el bien común de todas las especies. 
Abandonamos nuestra codicia disfrazada de libertad.
Nos aceptamos como una parte y no como un todo.
Exploramos  la contemplación armónica de nuestro medio.
Detectamos cada ciclo que nos rodea, por grande o pequeño.
Y  lo conectamos a nuestro propio ciclo vital.
para florecer y colaborar.
</p> <p>
Te invitamos a ser un ciudadano de la República, a meditar sobre tu manera de habitar y de cómo tú puedes transformar con el poder de tus decisiones informadas y conscientes.  
</p> <p>

</p> <p>
The Republic of the Mountain manifested itself thanks to the social cataclysm of Chile in October 2019. The tectonic plates of the eternal transition released the energy accumulated for more than 500 years, since the invader stepped on this territory, distorting the dance of the bees , the course of rivers, the existence of wetlands. Since he began to destroy the sacred fields, to extract everything that could be sold; saltpeter, copper and gold, pollute the salt flats to extract lithium, to cover fertile land with mining tailings.
</p> <p>
The Republic of the Mountain is constituted as a utopian micronation, decentralized and intangible, which activates an ephemeral appearance from the foothills of the Andes towards the limits of our perception. The Republic of the Mountain lies in the middle of the city and at the bottom of the sea. The presence of the mountain becomes a provocation to explore, to travel its unknown, unexplored territory, denied by the continuous distraction of the media. In the Fabulous Republic of the Mountain it is possible to put into practice the transformation of our form of collective action, something that the wise Mapuche people know as "Kume Mogen", or Good Living, inviting to live a form of balanced relationship between people and their environment, where the collective vertigo stops spinning as it was the end of a macabre dance.
</p> <p>
In the Republic of the Mountain the well-being of all living beings lies in our ability as humans to sink a colonialist, alienating and destructive attitude, where the accumulation of capital configures a kind of collective insanity. Decrease, slow down, breathe. The Republic of the Mountain resides in our collective unconscious, and the way to access its territory is through meditation, the intonation of a common tune, in which we find our own memory, actions and experiences. In the Republic of the Mountain the ascent occurs inwards, the journey towards an absolute introspection, where the transformation manifests itself from the recognition of our liquid, mutant and mutable being, from the observation of the distance and perspective of the internal territory, where the conformation of a geography constituted by the intangibility of our memory.
</p> <p>
The Republic of the Mountain is electromagnetic, noospheric, a body without organs where its inhabitants move as energy bodies without limits, merging with each other, in an eternal vibration, where energy and dark matter are the main source that structures its topology. In The Republic of the Mountain the vibrations of our existence bounce between the ravines of its volume, filter towards its center and turn us into itself.
</p> <p>
In the mountain republic
We declare Mother Earth the great protector of all its inhabitants.
We seek the common good of all species.
We abandon our greed disguised as freedom.
We accept ourselves as a part and not as a whole.
We explore the harmonic contemplation of our environment.
We detect each cycle that surrounds us, large or small.
And we connect it to our own life cycle.
to flourish and collaborate.
</p> <p>

We invite you to be a citizen of the Republic, to meditate on your way of living and how you can transform with the power of your informed and conscious decisions.
</p>
</Card>
        </div>
      ))}
    </div>
  );
};
