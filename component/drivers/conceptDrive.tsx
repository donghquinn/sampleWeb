function ConceptDrivers(props) {
  const {driverName, careerAge, concept} = props;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{driverName}</h2>
        <p>운전 경력: {careerAge}년</p>
        <p>택시 테마: {concept} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">구독하기</button>
        </div>
      </div>
    </div>
  )
}

export default ConceptDrivers;
