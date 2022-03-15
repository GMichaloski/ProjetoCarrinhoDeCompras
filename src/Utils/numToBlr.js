export default function (price) {
  return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
