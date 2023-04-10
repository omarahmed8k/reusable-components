import React from 'react'
import './CustomTable.css'
import DataTable from '../../components/DataTable/DataTable'
import table from '../../assets/images/CustomTable/table.png'
import head from '../../assets/images/CustomTable/head.png'
import body from '../../assets/images/CustomTable/body.png'
import CodeViewer from '../../components/CodeViewer/CodeViewer'

export default function CustomTable() {
  const tableHead = [
    'Full Name',
    'Job Title',
    'Age',
  ]

  const tableBody = [
    {
      firstName: 'Omar Abdelrahman',
      lastName: 'Frontend',
      age: 23
    },
    {
      firstName: 'Ahmed Ali',
      lastName: 'Backend',
      age: 27
    },
    {
      firstName: 'Ziad Khaled',
      lastName: 'Ui/Ux',
      age: 25
    },
  ]

  return (
    <div className="custom-table-page">
      <h1 className='page-title'>
        Hi to our DataTable Custom Component V1
      </h1>
      <p className='page-desc'>
        this a simple version - that get tableHead - TableBody Data - and List it on the table
        <br />
        let's Go...
      </p>

      <DataTable tableHead={tableHead} tableBody={tableBody} />

      <br />

      <p>
        Let's Try it on CodeSandBox
      </p>

      <br />

      <iframe src="https://codesandbox.io/embed/datatable-3yqjms?fontsize=14&hidenavigation=1&theme=dark"
        className='code-sandbox'
        title="DataTable"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

      <br />

      <p>
        consists of three component (Parent - 2 Children)
      </p>

      <br />

      <p>
        Let's Start With the parent {"<TableData />"}
      </p>

      <CodeViewer img={table} />

      <br />

      <p>
        so it gets "tableBody" and "tableHead" as a props and send it to thier Children
      </p>

      <br />

      <p>
        Let's see the first child {"<TableHead />"}
      </p>

      <CodeViewer img={head} />

      <br />

      <p>
        Let's see the second child {"<TableBody />"}
      </p>

      <CodeViewer img={body} />

    </div>
  )
}
