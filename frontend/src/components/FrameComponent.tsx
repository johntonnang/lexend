function FrameComponent() {
  return (
    <div className="flex h-[30px] w-[250px] flex-row items-start justify-start gap-[8px] rounded-xl">
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="flex h-[30px] w-[212px] flex-col items-start justify-start">
          <div className="relative flex-1 self-stretch rounded-31xl border-[1.5px] border-solid border-black-100 bg-beige" />
          <div className="relative hidden leading-[21px]">Search</div>
        </div>
      </div>
    </div>
  )
}

export default FrameComponent
