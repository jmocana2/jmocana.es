import React from 'react';

import MailIcon from '@mui/icons-material/Mail';

import foto from '../../../assets/img/foto.jpg';

const AnimatedPhoto = () => {
  return (
    <div className="group relative w-32 h-32 mt-4 ml-auto mr-auto overflow-hidden rounded-full">
      <div className="absolute -left-32 bg-primary border-[2px] border-primary rounded-full group-hover:left-0 ease-in duration-300">
        <a
          href="mailto: telecomu4@gmail.com"
          className="text-secondary w-32 h-32 flex justify-center items-center"
          title="Contactar con José María Ocaña"
        >
          <MailIcon className="w-12 h-12" />
        </a>
      </div>
      <img
        src={foto}
        alt="Foto de José María Ocaña"
        className="photo block w-32 h-32  ml-auto mr-auto"
      />
    </div>
  );
};

export default AnimatedPhoto;
