export default function Heading(props){
    return (
        <div >
        <div className="sections__heading">{props.sectionHeading}<span className="sections__span">...</span></div>
        <div className="section__subHeading">{props.sectionSubHeading}</div>
        </div>
    )
}