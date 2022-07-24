export type UserContextTypes = {
    user: boolean;
    setUser: (user: boolean) => void;
    theme: string | undefined,
    setTheme: (theme: string) => void
}