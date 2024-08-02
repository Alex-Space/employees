import './app-info.css'

function AppInfo(props) {
    const { totalEmployees, totalBonuses } = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании "Рога и Копыта"</h1>
            <h2>Общее число сотрудников: {totalEmployees}</h2>
            <h2>Премию получат: {totalBonuses}</h2>
        </div>
    )
}

export default AppInfo;
