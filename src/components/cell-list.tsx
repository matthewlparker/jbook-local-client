import { useTypedSelector } from '../hooks/use-typed-selector';

const CellList: React.FC = () => {
  // Destructure cells from state, and then order & data from cells
  // Return array of cells
  useTypedSelector(({ cells: { order, data } }) => order.map((id) => data[id]));

  return <div>Cell List</div>;
};

export default CellList;
