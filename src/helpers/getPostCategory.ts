export function getPostCategory(categoryById: number) {
  switch (categoryById) {
    case 1:
      return 'historie';
    case 2:
      return 'na poważnie';
    case 3:
      return 'polecane';
    default:
      return '';
  }
}
