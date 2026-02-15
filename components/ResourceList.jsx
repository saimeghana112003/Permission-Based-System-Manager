import ResourceItem from "./ResourceItem";

const ResourceList = ({ resources, updateStatus }) => {
  return (
    <ul>
      {resources.map((r) => (
        <ResourceItem
          key={r.id}
          resource={r}
          updateStatus={updateStatus}
        />
      ))}
    </ul>
  );
};

export default ResourceList;
