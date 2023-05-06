import React from 'react'
import mainImg from '../../assets/images/ServiceWorker/main.png'
import activeImg from '../../assets/images/ServiceWorker/active.png'
import constImg from '../../assets/images/ServiceWorker/const.png'
import fetchImg from '../../assets/images/ServiceWorker/fetch.png'
import installImg from '../../assets/images/ServiceWorker/install.png'
import browserImg from '../../assets/images/ServiceWorker/browser.png'
import CodeViewer from '../../components/CodeViewer/CodeViewer'
import './Webpack.css'

export default function Webpack() {

    return (
        <div className="custom-table-page">
            <h1 className='page-title'>
                Hi to our Webpack Topic
            </h1>

            <br />

            <h3>
                What's Webpack?
            </h3>

            <p className='page-desc'>
                Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
            </p>

            <ul className='points'>
                <li className='point'>

                </li>

                <li className='point'>

                </li>

                <li className='point'>

                </li>

                <li className='point'>

                </li>

                <li className='point'>

                </li>

                <li className='point'>

                </li>
            </ul>

            <br />

            <CodeViewer img={mainImg} />

            <br />

            <p className='page-desc'>
                This our demo link on github pages <h1><a href="https://omarahmed8k.github.io/webpack/" target='_blank'>Demo</a></h1>
                <br />
                Let's Try it on CodeSandBox
            </p>

            <iframe src="https://codesandbox.io/embed/service-worker-tqyo50?fontsize=14&hidenavigation=1&theme=dark"
                className='code-sandbox'
                title="service-worker"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>

            <br />

        </div>
    )
}
