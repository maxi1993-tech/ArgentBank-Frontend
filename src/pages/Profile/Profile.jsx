import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader"
import { Account } from "../../components/Account/Account"
import { accounts } from "../../data/accounts"

export function Profile() {

    return (
        <>
            <ProfileHeader />
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account) => {
                return <Account
                    key={account.title}
                    title={account.title}
                    amount={account.amount}
                    description={account.description} />
            })
            }
        </>
    )
}
