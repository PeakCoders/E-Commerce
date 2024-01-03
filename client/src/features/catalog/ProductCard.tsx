import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../../app/models/interfaces/product';
import { avatarMaker } from '../../app/utility/avatarMaker';
import { priceFormat } from '../../app/utility/priceFormat';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              {avatarMaker(product.name)}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: {
              fontWeight: 'bold',
              color: 'primary.main',
            },
          }}
        />
        <CardMedia
          component="img"
          sx={{ height: '100%' }}
          image={product.pictureUrl}
          alt="productImg"
        />
        <CardContent>
          <Typography gutterBottom color="secondary" variant="h5">
            {priceFormat(product.price)}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {product.brand}/{product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
          <Button size="small" component={Link} to={`/details/${product.id}`}>
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
