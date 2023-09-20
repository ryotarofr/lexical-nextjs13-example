"use client"

import { FC, useState } from "react"
import { toast } from "react-hot-toast"

import Modal from "./Modal"

import { useProModal } from "../hooks/use-pro-modal"
import axios from "axios"




export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      isOpen={proModal.isOpen}
      onChange={proModal.onClose}
    >
      <button disabled={loading} onClick={onSubscribe} className="w-full">
        Upgrade
        {/* <Zap className="w-4 h-4 ml-2 fill-white" /> */}
      </button>
    </Modal>
  )
}
