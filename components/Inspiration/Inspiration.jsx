import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Inspiration = ({ props }) => {
    const sortedArrayOfInspirationCollection = props.sort((a, b) =>
        a.fields.inspirationId > b.fields.inspirationId
            ? 1
            : b.fields.inspirationId > a.fields.inspirationId
            ? -1
            : 0
    )

    return (
        <div className="hero bg-base-200" id="skills">
            <div className="hero-content w-full text-center max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl fhd:max-w-5xl 2k:max-w-6xl 4k:max-w-7xl">
                <div>
                    <h2 className="font-bold pt-4 md:pt-6">Inspired</h2>
                    <h2 className="py-2 md:py-4 text-2xl md:text-3xl fhd:text-4xl">
                        <b>[ By ] </b> :
                    </h2>
                    <section className="grid">
                        <ul>
                            {sortedArrayOfInspirationCollection.map(
                                (element, index) => (
                                    <li key={index}>
                                        <p>{element.fields.inspirationTitle}</p>
                                        {documentToReactComponents(
                                            element.fields.inspirationSubHeader
                                        )}
                                        {documentToReactComponents(
                                            element.fields.inspirationObject
                                        )}
                                    </li>
                                )
                            )}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Inspiration
