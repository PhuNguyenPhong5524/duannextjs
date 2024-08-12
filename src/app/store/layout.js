
export const metadata = {
    title: "Chào mừng bạn đến store"
  };

export default function StoreLayout({children}) {
    return (
        <section>
            {children}
        </section>
    );
}