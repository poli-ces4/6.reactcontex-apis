import { Typography, Grid } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";
const Noticias = () => {
  const { noticias } = useNoticias();
  return (
    <>
      <Typography align="center" marginY={5} component="h1" variant="h3">
        Listado Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.publishedAt} />
        ))}
      </Grid>
    </>
  );
};

export default Noticias;
