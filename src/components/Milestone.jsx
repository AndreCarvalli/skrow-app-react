export default function Milestone({milestone, currency}){
    return (
        <div
            className="milestone-item"
            // data-milestone-id={milestone.id}
        >

            <h5 className="milestone-name">
                {milestone.title}
            </h5>

            <p>
                Milestone Amount: {currency} {milestone.amount}
            </p>

            <table className="table table-sm">

                <thead>
                    <tr>
                        <th>Task title</th>
                        <th>Developer Name</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {milestone.tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.developerName}</td>
                            <td>{currency} {task.amount}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}