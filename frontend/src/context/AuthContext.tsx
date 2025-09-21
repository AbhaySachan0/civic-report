// src/context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type UserRole = "customer" | "admin" | null;

interface AuthContextType {
  isAuth: boolean;
  role: UserRole;
  user: string | null;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const [user, setUser] = useState<string | null>(() => {
    return localStorage.getItem("loggedInUser");
  });

  const [role, setRole] = useState<UserRole>(() => {
    return (localStorage.getItem("userRole") as UserRole) || null;
  });

  // 🔄 keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuth));

    if (user) {
      localStorage.setItem("loggedInUser", user);
    } else {
      localStorage.removeItem("loggedInUser");
    }

    if (role) {
      localStorage.setItem("userRole", role);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [isAuth, user, role]);

  // ✅ login updates both state and storage
  const login = (email: string, role: UserRole) => {
    setIsAuth(true);
    setUser(email);
    setRole(role);

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("loggedInUser", email);
    if (role) localStorage.setItem("userRole", role);
  };

  // ✅ logout clears everything
  const logout = () => {
    setIsAuth(false);
    setUser(null);
    setRole(null);

    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userRole");
  };

  return (
    <AuthContext.Provider value={{ isAuth, role, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ easy custom hook
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
