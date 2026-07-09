// SkulptTurtle.jsx
import React, { useEffect, useRef, useState } from "react";

const SkulptTurtle = () => {
  // ==============================
  // State & Refs
  // ==============================
  const [userName, setUserName]   = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput]       = useState("");
  const [showInput, setShowInput] = useState(true);
  const canvasRef                 = useRef(null);
  const outputRef                 = useRef(null);

  // ==============================
  // Load Skulpt Scripts Dynamically
  // ==============================
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script    = document.createElement("script");
        script.src      = src;
        script.onload   = resolve;
        script.onerror  = reject;
        document.head.appendChild(script);
      });
    };

    // Load jQuery first then Skulpt
    const loadAll = async () => {
      try {
        await loadScript(
          "https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"
        );
        await loadScript(
          "https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js"
        );
        await loadScript(
          "https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js"
        );
        console.log("✅ Skulpt loaded successfully!");
      } catch (err) {
        console.error("❌ Failed to load Skulpt:", err);
      }
    };

    loadAll();
  }, []);

  // ==============================
  // Output Function
  // ==============================
  const outf = (text) => {
    setOutput((prev) => prev + text);
  };

  // ==============================
  // Built-in Read Function
  // ==============================
  const builtinRead = (x) => {
    if (
      window.Sk.builtinFiles === undefined ||
      window.Sk.builtinFiles["files"][x] === undefined
    ) {
      throw "File not found: '" + x + "'";
    }
    return window.Sk.builtinFiles["files"][x];
  };

  // ==============================
  // Input Function (uses state)
  // ==============================
  const inputf = (promptText) => {
    return new Promise((resolve) => {
      // Use the userName from state
      // instead of browser prompt
      console.log("Input prompt:", promptText);
      resolve(userName || "User");
    });
  };

  // ==============================
  // Python Program (Turtle WordArt)
  // ==============================
  const getPythonCode = () => `
import turtle
import random

alphabet = {
    'A': ((0,0),(0.5,1),(0.75,0.5),(0.25,0.5),(0.75,0.5),(1,0)),
    'B': ((0,0),(0,1),(0.625,1),(0.75,0.875),(0.75,0.625),(0.625,0.5),(0,0.5),(0.625,0.5),(0.75,0.375),(0.75,0.125),(0.625,0),(0,0)),
    'C': ((0.75,0.125),(0.625,0),(0.125,0),(0,0.125),(0,0.875),(0.125,1),(0.625,1),(0.75,0.875)),
    'D': ((0,0),(0,1),(0.625,1),(0.75,0.875),(0.75,0.125),(0.625,0),(0,0)),
    'E': ((0.75,0),(0,0),(0,0.5),(0.75,0.5),(0,0.5),(0,1),(0.75,1)),
    'F': ((0,0),(0,0.5),(0.75,0.5),(0,0.5),(0,1),(0.75,1)),
    'G': ((0.75,0.5),(0.625,0.5),(0.75,0.5),(0.75,0.125),(0.625,0),(0.125,0),(0,0.125),(0,0.875),(0.125,1),(0.625,1),(0.75,0.875)),
    'H': ((0,0),(0,1),(0,0.5),(0.75,0.5),(0.75,1),(0.75,0)),
    'I': ((0,0),(0.25,0),(0.125,0),(0.125,1),(0,1),(0.25,1)),
    'J': ((0,0.125),(0.125,0),(0.375,0),(0.5,0.125),(0.5,1)),
    'K': ((0,0),(0,1),(0,0.5),(0.75,1),(0,0.5),(0.75,0)),
    'L': ((0,0),(0,1),(0,0),(0.75,0)),
    'M': ((0,0),(0,1),(0.5,0),(1,1),(1,0)),
    'N': ((0,0),(0,1),(0.75,0),(0.75,1)),
    'O': ((0.75,0.125),(0.625,0),(0.125,0),(0,0.125),(0,0.875),(0.125,1),(0.625,1),(0.75,0.875),(0.75,0.125)),
    'P': ((0,0),(0,1),(0.625,1),(0.75,0.875),(0.75,0.625),(0.625,0.5),(0,0.5)),
    'Q': ((0.75,0.125),(0.625,0),(0.125,0),(0,0.125),(0,0.875),(0.125,1),(0.625,1),(0.75,0.875),(0.75,0.125),(0.875,0)),
    'R': ((0,0),(0,1),(0.625,1),(0.75,0.875),(0.75,0.625),(0.625,0.5),(0,0.5),(0.625,0.5),(0.875,0)),
    'S': ((0,0.125),(0.125,0),(0.625,0),(0.75,0.125),(0.75,0.375),(0.675,0.5),(0.125,0.5),(0,0.625),(0,0.875),(0.125,1),(0.625,1),(0.75,0.875)),
    'T': ((0,1),(0.5,1),(0.5,0),(0.5,1),(1,1)),
    'U': ((0,1),(0,0.125),(0.125,0),(0.625,0),(0.75,0.125),(0.75,1)),
    'V': ((0,1),(0.375,0),(0.75,1)),
    'W': ((0,1),(0.25,0),(0.5,1),(0.75,0),(1,1)),
    'X': ((0,0),(0.375,0.5),(0,1),(0.375,0.5),(0.75,1),(0.375,0.5),(0.75,0)),
    'Y': ((0,1),(0.375,0.5),(0.375,0),(0.375,0.5),(0.75,1)),
    'Z': ((0,1),(0.75,1),(0,0),(0.75,0)),
}

userName = input("Enter your name: ")
print(userName)
myPen = turtle.Turtle()
myPen.shape('turtle')
myPen.speed(0)
window = turtle.Screen()
window.bgcolor("#000000")
myPen.pensize(3)

def displayMessage(message, fontSize, color, x, y, colors=None):
    myPen.color(color)
    message = message.upper()
    for i, character in enumerate(message):
        if character in alphabet:
            if colors:
                myPen.color(colors[i % len(colors)])
            letter = alphabet[character]
            myPen.penup()
            for dot in letter:
                myPen.goto(x + dot[0] * fontSize, y + dot[1] * fontSize)
                myPen.pendown()
            if character == 'I':
                x += fontSize * 0.35
            else:
                x += fontSize
            x += characterSpacing
        elif character == " ":
            x += fontSize + characterSpacing

fontSize = 11
characterSpacing = 3
fontColor = "#FF00FF"

msg1 = "Hello " + userName
msg2 = "I see you are a user"
msg3 = "On Grow Tech"
colors = ["#6CB94F", "#EF7543", "#EA545E", "#EB58A0", "#2FB7E9", "#158E9B"]

startX = -((len(msg1) * (fontSize + characterSpacing)) / 2)

displayMessage(msg1, fontSize, fontColor, startX, 50, colors)
displayMessage(msg2, fontSize, fontColor, -105, 10, colors)
displayMessage(msg3, fontSize, fontColor, -105, -30, colors)

myPen.hideturtle()
turtle.done()
`;

  // ==============================
  // Run Skulpt Function
  // ==============================
  const runSkulpt = () => {
    if (!userName.trim()) {
      alert("Please enter your name first!");
      return;
    }

    if (!window.Sk) {
      alert("Skulpt is still loading. Please wait!");
      return;
    }

    // Reset output
    setOutput("");
    setIsRunning(true);
    setShowInput(false);

    // Clear canvas
    const canvasDiv = document.getElementById("mycanvas");
    if (canvasDiv) canvasDiv.innerHTML = "";

    // Configure Skulpt
    window.Sk.pre = "output";
    window.Sk.configure({
      output: outf,
      read: builtinRead,
      inputfun: inputf,
      inputfunTakesPrompt: true,
    });

    // Set turtle canvas target
    (window.Sk.TurtleGraphics || (window.Sk.TurtleGraphics = {})).target =
      "mycanvas";

    // Run Python code
    const myPromise = window.Sk.misceval.asyncToPromise(() => {
      return window.Sk.importMainWithBody(
        "<stdin>",
        false,
        getPythonCode(),
        true
      );
    });

    myPromise.then(
      (mod) => {
        console.log("✅ Success!");
        setIsRunning(false);
      },
      (err) => {
        console.error("❌ Error:", err.toString());
        setOutput((prev) => prev + "\nError: " + err.toString());
        setIsRunning(false);
      }
    );
  };

  // ==============================
  // Reset Function
  // ==============================
  const handleReset = () => {
    setUserName("");
    setOutput("");
    setShowInput(true);
    setIsRunning(false);
    const canvasDiv = document.getElementById("mycanvas");
    if (canvasDiv) canvasDiv.innerHTML = "";
  };

  // ==============================
  // Styles
  // ==============================
  const styles = {
    // Page wrapper
    page: {
      background: "#1a1a2e",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    },

    // Main container
    container: {
      background: "#16213e",
      borderRadius: "16px",
      padding: "30px",
      width: "100%",
      maxWidth: "700px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    },

    // Title
    title: {
      color: "#FF00FF",
      textAlign: "center",
      fontSize: "24px",
      marginBottom: "20px",
      textShadow: "0 0 10px #FF00FF",
      letterSpacing: "2px",
    },

    // Input section
    inputSection: {
      background: "#0f3460",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "20px",
    },

    // Label
    label: {
      color: "#2FB7E9",
      fontSize: "15px",
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
    },

    // Input wrapper
    inputWrapper: {
      display: "flex",
      gap: "10px",
    },

    // Input field
    input: {
      flex: 1,
      padding: "12px 15px",
      borderRadius: "8px",
      border: "2px solid #2FB7E9",
      background: "#1a1a2e",
      color: "white",
      fontSize: "16px",
      outline: "none",
    },

    // Run button
    runBtn: {
      padding: "12px 25px",
      background: isRunning ? "#555" : "#FF00FF",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: isRunning ? "not-allowed" : "pointer",
      fontSize: "15px",
      fontWeight: "bold",
      whiteSpace: "nowrap",
      boxShadow: isRunning ? "none" : "0 0 15px #FF00FF",
      transition: "all 0.3s",
    },

    // Reset button
    resetBtn: {
      padding: "10px 20px",
      background: "transparent",
      color: "#e74c3c",
      border: "2px solid #e74c3c",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      marginTop: "10px",
      transition: "all 0.3s",
    },

    // Canvas wrapper
    canvasWrapper: {
      background: "#000000",
      borderRadius: "12px",
      overflow: "hidden",
      minHeight: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #2FB7E9",
      marginBottom: "15px",
      position: "relative",
    },

    // Canvas placeholder text
    placeholder: {
      color: "#555",
      fontSize: "16px",
      textAlign: "center",
    },

    // Output section
    outputSection: {
      background: "#0a0a0a",
      borderRadius: "8px",
      padding: "15px",
      marginTop: "15px",
      minHeight: "50px",
      border: "1px solid #333",
    },

    // Output label
    outputLabel: {
      color: "#2ecc71",
      fontSize: "13px",
      marginBottom: "5px",
      fontFamily: "monospace",
    },

    // Output text
    outputText: {
      color: "#2ecc71",
      fontFamily: "monospace",
      fontSize: "14px",
      whiteSpace: "pre-wrap",
      margin: 0,
    },

    // Status bar
    statusBar: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "15px",
    },

    // Status dot
    statusDot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: isRunning ? "#f39c12" : "#2ecc71",
      boxShadow: isRunning
        ? "0 0 8px #f39c12"
        : "0 0 8px #2ecc71",
    },

    // Status text
    statusText: {
      color: isRunning ? "#f39c12" : "#2ecc71",
      fontSize: "13px",
    },

    // Info chips
    chipRow: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "15px",
    },

    chip: (color) => ({
      background: color + "22",
      color: color,
      border: `1px solid ${color}`,
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
    }),
  };

  // ==============================
  // JSX Return
  // ==============================
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* ── Title ── */}
        <h2 style={styles.title}>
          🐢 Skulpt Turtle WordArt
        </h2>

        {/* ── Info Chips ── */}
        <div style={styles.chipRow}>
          <span style={styles.chip("#6CB94F")}>Python</span>
          <span style={styles.chip("#EF7543")}>Skulpt</span>
          <span style={styles.chip("#2FB7E9")}>Turtle Graphics</span>
          <span style={styles.chip("#EB58A0")}>WordArt</span>
        </div>

        {/* ── Status Bar ── */}
        <div style={styles.statusBar}>
          <div style={styles.statusDot}></div>
          <span style={styles.statusText}>
            {isRunning
              ? "Running Python... ⏳"
              : "Ready to draw! 🎨"}
          </span>
        </div>

        {/* ── Input Section ── */}
        <div style={styles.inputSection}>
          <label style={styles.label}>
            👤 Enter Your Name:
          </label>
          <div style={styles.inputWrapper}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") runSkulpt();
              }}
              placeholder="Type your name here..."
              style={styles.input}
              disabled={isRunning}
            />
            <button
              onClick={runSkulpt}
              disabled={isRunning}
              style={styles.runBtn}
            >
              {isRunning ? "⏳ Running..." : "▶ Run"}
            </button>
          </div>

          {/* Reset Button */}
          {!showInput && (
            <button
              onClick={handleReset}
              style={styles.resetBtn}
            >
              🔄 Reset
            </button>
          )}
        </div>

        {/* ── Canvas Area ── */}
        <div style={styles.canvasWrapper}>
          {showInput ? (
            <div style={styles.placeholder}>
              <p>🐢</p>
              <p>Enter your name and click Run</p>
              <p style={{ fontSize: "13px", color: "#444" }}>
                Turtle will draw your name here!
              </p>
            </div>
          ) : null}

          {/* Skulpt renders canvas here */}
          <div
            id="mycanvas"
            ref={canvasRef}
            style={{
              width: "100%",
              display: showInput ? "none" : "block",
            }}
          ></div>
        </div>

        {/* ── Output Section ── */}
        <div style={styles.outputSection}>
          <p style={styles.outputLabel}>
            {">>> Console Output:"}
          </p>
          <pre
            id="output"
            ref={outputRef}
            style={styles.outputText}
          >
            {output || "No output yet..."}
          </pre>
        </div>

        {/* ── How it Works ── */}
        <div style={{
          marginTop: "20px",
          background: "#0f3460",
          borderRadius: "10px",
          padding: "15px"
        }}>
          <p style={{
            color: "#2FB7E9",
            fontWeight: "bold",
            marginBottom: "10px"
          }}>
            ℹ️ How it Works:
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px"
          }}>
            {[
              { icon: "1️⃣", text: "Enter your name" },
              { icon: "2️⃣", text: "Click Run button" },
              { icon: "3️⃣", text: "Python runs in browser" },
              { icon: "4️⃣", text: "Turtle draws WordArt!" }
            ].map((step) => (
              <div
                key={step.icon}
                style={{
                  background: "#1a1a2e",
                  padding: "10px",
                  borderRadius: "8px",
                  color: "#ccc",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span>{step.icon}</span>
                <span>{step.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkulptTurtle;