import React from 'react';
import { Grid, Typography } from '@mui/material';
import "./paginaEventos.module.css";
import imagen1 from "../../img/evento1.png"
import imagen2 from "../../img/evento2.png"
import imagen3 from "../../img/evento3.png"
import imagen4 from "../../img/evento4.png"
import imagen5 from "../../img/evento5.png"

const PaginaEventos = () => {

  return (
    <>       
    <h1 style={{ textAlign: "center", color: "black", marginTop: "20px", fontFamily: "Parisienne, cursive", fontSize: "100px", fontWeight: "normal"}}>
    Eventos
  </h1>
  <p style={{textAlign: "center", color: "black", fontSize: "30px"}}>Estos son nuestros eventos del mes</p>
    <Grid container spacing={2} padding="0px 100px 150px 100px">
      {/* Fila 1 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '15px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}}>
          <div style={{ position: 'relative' }}>
            <img src={imagen1} alt="Noches de Tango" />
            <Typography variant="body1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '2.5rem', textAlign: 'center', whiteSpace: 'nowrap' }}>
              Noches de Tango
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
          <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            Sumérgete en el seductor ritmo del tango interpretado por talentosos músicos y bailarines en vivo, mientras degustas exquisitos platos preparados por nuestro renombrado chef.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Domingo 20 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 21:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

      {/* Fila 2 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '45px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}}>
          <div style={{ position: 'relative' }}>
            <img src={imagen2} alt=" Taller de pizza" />
            <Typography variant="body1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '2.5rem', textAlign: 'center', whiteSpace: 'nowrap' }}>
              Taller de pizza
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
          <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            ¿Eres amante de la pizza? ¿Te encanta experimentar con diferentes ingredientes y sabores? ¡Entonces este taller es para ti! Únete a nosotros para vivir una experiencia divertida y deliciosa en nuestro Taller de Pizza.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Viernes 18 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 19:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

      {/* Fila 3 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '45px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}}>
          <div style={{ position: 'relative' }}>
            <img src={imagen3} alt="Tardes de jazz" />
            <Typography variant="body1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '2.5rem', textAlign: 'center', whiteSpace: 'nowrap' }}>
              Tardes de jazz
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
          <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            Déjate llevar por el encanto y la magia del jazz en nuestro evento Trdes de Jazz. Sumérgete en un ambiente lleno de melodías suaves, ritmos vibrantes y la improvisación única que caracteriza a este género musical.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Viernes 25 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 20:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

      {/* Fila 4 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '45px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}} >
          <div style={{ position: 'relative' }}>
            <img src={imagen4} alt="Fiesta Mexicana" />
            <Typography variant="body1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '2.5rem', textAlign: 'center', whiteSpace: 'nowrap' }}>
              Fiesta Mexicana
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
          <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            Ven y disfruta de una noche llena de risas y diversión en nuestro evento de comedia. Los mejores comediantes te harán reír a carcajadas con sus ingeniosos chistes y monólogos.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Sábado 26 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 21:30
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

      {/* Fila 5 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '45px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}}>
          <div style={{ position: 'relative' }}>
            <img src={imagen5} alt="Noches de baile" />
            <Typography variant="body1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '2.5rem', textAlign: 'center', whiteSpace: 'nowrap' }}>
              Noches de baile
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
          <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            Celebra la noche de los muertos en nuestro evento especial de Halloween. Disfruta de una cena temática, música en vivo y sorpresas espeluznantes en una noche llena de diversión y misterio.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Sábado 31 de octubre
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 20:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

    </Grid>
    </>
  );
}

export default PaginaEventos;
