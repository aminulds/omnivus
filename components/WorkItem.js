

export default function WorkItem({item}) {
  return <>
    <div className="work-item p-4 shadow d-flex justify-content-between align-items-center">
        <h5 className="btn fw-bold">{item.title}</h5>
        <i className="fas fa-arrow-right"></i>
    </div>
  </>;
}
