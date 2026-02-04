
export const Layout=({ children }: { children: React.ReactNode }) => {

    return (
        <main className="flex h-screen">

            <section className="flex h-full flex-1 flex-col">
                header
                <div className="main-content">{children}</div>
            </section>
        </main>
    )
}

