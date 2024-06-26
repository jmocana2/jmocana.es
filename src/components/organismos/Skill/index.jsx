import * as React from 'react';
import Box from '@mui/material/Box';

import SkillPanel from './skillPanel';

const Skill = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mx: 'auto',
          my: 'auto',
          width: 420
        }
      }}
    >
      <SkillPanel
        title="HTML"
        abbr="Lenguaje de Marcas de Hipertexto"
        skillLevel={5}
      >
        Más de 15 años trabajando con <strong>HTML</strong>, prestando especial
        cuidado a la semántica de la web mediante el marcado{' '}
        <strong>HTML5</strong>, lo que me permite desarrollar{' '}
        <strong>páginas más accesibles</strong> y más fáciles de encontrar por
        los actuales motores de busqueda, mejorando el{' '}
        <strong>
          <abbr title="Optimización para motores de búsqueda">SEO</abbr>
        </strong>{' '}
        de la página
      </SkillPanel>
      <SkillPanel title="CSS" abbr="Hojas de Estilo en Cascada" skillLevel={5}>
        Alta experiencia en el manejo de <strong>CSS3</strong> y{' '}
        <strong>preprocesadores CSS</strong>, especialmente con{' '}
        <strong>SASS</strong>. También he trabajado en algunos proyectos con
        <strong> styled components (CSS in JS)</strong>. Especial atención en
        lograr un css mínimo, escalable y reutilizable, intentando evitar
        siempre el uso de múltiples herencias.
      </SkillPanel>
      <SkillPanel title="JS - REACT" skillLevel={3}>
        Aunque nunca he estado especializado en <strong>javascript</strong>,
        considero que tengo una buena base, ya que he trabajado con este
        lenguaje en varios proyectos, sobre todo con temas relaccionados con el
        manejo del DOM. También en los últimos años he trabajado creando{' '}
        <strong>aplicaciones SPA con REACT</strong>.
      </SkillPanel>
    </Box>
  );
};

export default Skill;
