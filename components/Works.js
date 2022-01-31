import WorkItem from "./WorkItem";


export default function Works() {
   
    const workData = [
       {
        'id': 1,
        'title': 'Web Element Research',
       },
       {
        "id": 2,
        "title": 'Web Development',
       },
       {
        "id": 3,
        "title": 'SEO Service',
       },
       {
        "id": 4,
        "title": 'Power Redesign',
       },
       {
        "id": 5,
        "title": 'UX Design',
       },
       {
        "id": 6,
        "title": 'UI Design',
       },
       {
        "id": 7,
        "title": 'Web Design',
       },
       {
        "id": 8,
        "title": 'Game Design',
       },
       {
           "id": 9,
           "title": 'Mobile App Design',
       },
       {
        "id": 10,
        "title": 'Icon Design',
       },
       {
        "id": 11,
        "title": 'Domain & Hosting',
       },
       {
        "id": 12,
        "title": 'Composer Develop',
       },
   ]

  return <>
    <section className="work-section py-4 py-md-5" id="service">
        <div className="container py-4 py-md-5">
            <div className="">
                <h1 className="text-black">What We Do</h1>
                <p className="text-success py-2">Does any industry face a more complex audience journey and <br /> marketing sales process than B2B technology.</p>
            </div>
            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 pt-4">
                {workData.map((item) => {
                    return (
                        <div key={item.id} className="col">
                            <WorkItem item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
   </section>
  </>;
}
