#line {
  width: 200px;
  height: 2px;
  background-color: black;
  animation: rotateLine 2s infinite linear;
}

@keyframes rotateLine {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}