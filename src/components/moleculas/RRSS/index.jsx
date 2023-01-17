import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const RRSS = () => {
  return (
    <ul className="flex items-center ml-2 pl-2 border-l-[1px] border-primary">
      <li className="mr-1">
        <a
          href="https://www.linkedin.com/in/jose-mar%C3%ADa-oca%C3%B1a-tofi%C3%B1o-2aa37928/"
          className="text-acent hover:text-primary ease-in duration-200"
          title="Ver perfil de Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="w-7 h-7" />
        </a>
      </li>
      <li className="-mt-1">
        <a
          href="https://github.com/jmocana2"
          className="text-acent hover:text-primary ease-in duration-200"
          title="Ver perfil de Git Hub"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </li>
    </ul>
  );
};

export default RRSS;
