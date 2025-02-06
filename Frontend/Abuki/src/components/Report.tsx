interface Props{
    generate:()=>void;
}

const Report = ({generate}:Props) => {
  return (
    <button onClick={generate} className="btn btn-primary">
      Generate report
    </button>
  )
}

export default Report
