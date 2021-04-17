import { Link } from "react-router-dom"
import styled from 'styled-components'
import {Table} from 'antd'
import 'antd/dist/antd.css'
import './tabela.css'
import {
    Secao, SecaoImagemFundo, Container, Titulo
} from '../../components/estilosCompoentes'
import MenuAdmin from "../../components/menu-admin"
import Xpreto from '../../imgs/x-preto.png'

const DivTitulos = styled.div`
    display: flex;
    h2:nth-of-type(2){
        margin-left: 8px;
    }
    padding-top: 100px;
    padding-left: 100px;
`

function ListaViagens() {

    const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
        },
      ];

    const columns = [
      {
        title: "Viagem",
        dataIndex: "viagem",
        key: "viagem",
        width:'5%',
        // filters: [
        //   { text: "Joe", value: "Joe" },
        //   { text: "Jim", value: "Jim" }
        // ],
        // filteredValue: filteredInfo.name || null,
        // onFilter: (value, record) => record.name.includes(value),
        // sorter: (a, b) => a.name.length - b.name.length,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        // ellipsis: true
      },
    {
        title: "Planeta",
        dataIndex: "Planeta",
        key: "Planeta",
        width:'5%',
        },
    {
        title: "Data",
        dataIndex: "Data",
        key: "Data",
        width:'5%',
        },
    {
        title: "Duração",
        dataIndex: "Duracao",
        key: "Duracao",
        width:'5%',
        },
    {
        title: "Pendentes",
        dataIndex: "Pendentes",
        key: "Pendentes",
        width:'5%',
        },
    {
        title: "Aprovados",
        dataIndex: "Aprovados",
        key: "Aprovados",
        width:'5%',
        },
        {
        title: "Ações",
        width:'5%',
        },
    ]
    
    return (
        <div>
        <MenuAdmin></MenuAdmin>
        <SecaoImagemFundo $imagem={Xpreto}>
            <Container>
                <DivTitulos>
                    <Titulo $cor='white' $fontSize="42">nossas</Titulo>
                    <Titulo $cor="#FEBE1D" $fontSize="42">viagens</Titulo>
                </DivTitulos>
        
                
                <Table
                    columns={columns}
                    dataSource={data}
                    // styled={width='90vw'}
                />

            </Container>

        </SecaoImagemFundo>
        </div>
        
    )
}

export default ListaViagens;