import { Box, Button } from "@mui/material";
import React from "react";

export default function DownLoadAppButton() {
  return (
    <Box 
      sx={{ 
        position: 'fixed', // Hace que el botón esté siempre visible
        bottom: 20, // Espacio desde la parte inferior de la pantalla
        right: 20, // Espacio desde la parte derecha
        zIndex: 1000, // Asegura que el botón esté encima de otros elementos
      }}
    >
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '10px 20px',
        }}
      >
        <a 
          href="./appPython.rar" 
          download="AppPython.rar" 
          style={{ 
            textDecoration: 'none', 
            color: 'black', 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          Descargar App
        </a>
      </Button>
    </Box>
  );
}
