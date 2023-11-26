export function getPostCategory(categoryByCount: number) {
  switch (categoryByCount) {
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
