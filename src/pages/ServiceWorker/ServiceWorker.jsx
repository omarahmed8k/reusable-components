import React from 'react'
import './ServiceWorker.css'
import mainImg from '../../assets/images/ServiceWorker/main.png'
import activeImg from '../../assets/images/ServiceWorker/active.png'
import constImg from '../../assets/images/ServiceWorker/const.png'
import fetchImg from '../../assets/images/ServiceWorker/fetch.png'
import installImg from '../../assets/images/ServiceWorker/install.png'
import browserImg from '../../assets/images/ServiceWorker/browser.png'
import workerImg from '../../assets/images/ServiceWorker/worker.png'
import CodeViewer from '../../components/CodeViewer/CodeViewer'

export default function ServiceWorker() {

    return (
        <div className="custom-table-page">
            <h1 className='page-title'>
                Hi to our Service Worker Topic V1
            </h1>

            <br />

            <h3>
                What's Service Worker?
            </h3>

            <p className='page-desc'>
                Service workers are a special type of web worker that are designed to run in the background and intercept network requests. They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.
            </p>

            <ul className='points'>
                <li className='point'>
                    Js file that register and runs in the background and can intercept network requests.
                </li>

                <li className='point'>
                    Stays registered even after the browser is closed.
                </li>

                <li className='point'>
                    Can be used to cache files and assets to load content even when there is no internet connection.
                </li>

                <li className='point'>
                    Can be used to send push notifications to the user.
                </li>

                <li className='point'>
                    Can be used to sync data in the background.
                </li>

                <li className='point'>
                    Can be used to create a custom offline page.
                </li>
            </ul>

            <br />

            <h3>
                What's the difference between Service Worker and Web Worker?
            </h3>

            <p className='page-desc'>
                Web workers are a way to run a script operation in a background thread separate from the main execution thread of a web application. This frees up the main thread to update the user interface and perform other tasks without being blocked by a long-running script. Web workers are typically used to perform computationally intensive tasks; they can also perform I/O tasks like XHR or WebSockets. Web workers are not a security mechanism. They do not run in a different security context than the main execution thread. They have no special privileges that scripts that are run in the main execution thread do not have.
            </p>

            <br />

            <h3>
                How to use Service Worker?
            </h3>

            <br />

            <ul className='points'>
                <li className='point'>
                    First Register Service Worker
                </li>
                <li className="point">
                    Second Install Service Worker
                </li>
                <li className="point">
                    Finally Activate Service Worker
                </li>
            </ul>

            <br />

            <h3>
                How to register Service Worker?
            </h3>

            <p className='page-desc'>
                To register Service Worker, you need to create a file called "sw.js" in your project, and then you need to register it in your project.
            </p>

            <br />

            <p>
                Let's Start With the main.js file to register the Service Worker
            </p>

            <CodeViewer img={mainImg} />

            <br />

            <p>
                The register function to register the Service Worker
                <br />
                it test if the browser support Service Worker or not, and if it support it will register the Service Worker.
            </p>

            <br />

            <p>
                Let's see from browser what happen when we register the Service Worker
            </p>

            <CodeViewer img={browserImg} />

            <br />

            <p>
                Let's see how to create the Service Worker file "sw.js", and how to cache the files and assets to load content even when there is no internet connection.
            </p>

            <br />
            <br />

            <p>
                First block of code is the const variable to cache the files and assets.
            </p>
            <CodeViewer img={constImg} />
            <br />
            <p>
                Second block of code is the install event to cache the files and assets.
            </p>
            <CodeViewer img={installImg} />
            <br />
            <p>
                Third block of code is the activate event to activate the Service Worker.
            </p>
            <br />
            <CodeViewer img={activeImg} />
            <br />
            <p>
                Fourth block of code is the fetch event to fetch the files and assets from the cache if there is no internet connection.
            </p>
            <CodeViewer img={fetchImg} />

            <br />

            <p className='page-desc'>
                This our demo link on github pages <h1><a href="https://omarahmed8k.github.io/service-worker/" target='_blank'>Demo</a></h1>
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
