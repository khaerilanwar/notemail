import { Table } from "flowbite-react"
import { Link } from "react-router-dom";

function TableMail({ data, currentPage, totalData }) {
  return (
    <div className="overflow-x-auto mx-1">
      <h2 className={`font-poppins bg-theme3 text-center text-white py-4 text-lg ${totalData !== 0 ? 'hidden' : ''}`}>Tidak ada email yang ditampilkan!</h2>
      <Table className={`font-poppins bg-theme3 ${totalData !== 0 ? '' : 'hidden'}`}>
        <Table.Head>
          <Table.HeadCell className="bg-theme3 text-gray-200 text-sm normal-case font-semibold px-4 md:px-7">No.</Table.HeadCell>
          <Table.HeadCell className="bg-theme3 text-gray-200 text-sm normal-case font-semibold px-2">Email</Table.HeadCell>
          <Table.HeadCell className="bg-theme3 text-gray-200 text-sm normal-case font-semibold px-2">Password</Table.HeadCell>
          <Table.HeadCell className="bg-theme3 text-gray-200 text-sm normal-case font-semibold px-4 md:px-7">
            <span className="text-sm normal-case font-semibold sr-only">Detail</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-theme-light">
          {data.map((item, index) => (
            <Table.Row className="bg-theme3" key={item._id}>
              <Table.Cell className="text-gray-200 bg-theme3 px-4 md:px-7">{index + 1 + ((currentPage - 1) * 10)}.</Table.Cell>
              <Table.Cell className="text-gray-200 bg-theme3 whitespace-nowrap px-2">
                {item.email}
              </Table.Cell>
              <Table.Cell className="text-gray-200 bg-theme3 px-2">{item.password}</Table.Cell>
              <Table.Cell className="text-gray-200 bg-theme3 px-4 md:px-7">
                <Link to={`/detail/${item._id}`} className="font-medium text-cyan-400 hover:underline">Detail</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default TableMail;