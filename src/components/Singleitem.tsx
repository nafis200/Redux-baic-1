

interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  interface Props {
    data: Data;
    setUsers: React.Dispatch<React.SetStateAction<Data[]>>;
  }
  

const Singleitem:React.FC<Props>= ({data,setUsers})=> { 
    const {userId,id,title,body} = data

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            userId:{userId}
            <div className="badge badge-secondary">Id: {id}</div>
          </h2>
          <p> <span className="font-bold">Title</span> {title}</p>
          <p> <span className="font-bold">description:</span> {body}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default Singleitem;