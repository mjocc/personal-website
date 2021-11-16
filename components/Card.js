const Card = ({ children }) => (
  <div className="z-10 max-w-sm bg-gray-100 border rounded-md">{children}</div>
);

const CardBody = ({ children }) => <div className="p-4">{children}</div>;

const CardTitle = ({ children }) => (
  <h5 className="mb-1 text-xl font-medium">{children}</h5>
);

const CardText = ({ children }) => <p className="mb-4">{children}</p>;

export { Card, CardBody, CardTitle, CardText };
