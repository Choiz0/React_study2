import SingleItem from "./SingleItem";

const Items = ({ items, onRemove }) => {
  return (
    <div className="items ">
      {items.map((it) => {
        return <SingleItem key={items.id} {...it} onRemove={onRemove} />;
      })}
    </div>
  );
};
export default Items;
