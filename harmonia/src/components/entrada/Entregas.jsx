"use client";

import React, { useState, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  Main,
  H1,
  Section,
  Input,
  StyleSectio,
  Lu,
  Table,
  H2,
  Span,
  Opiton
} from "./entrega.style";

export const Entregas = () => {
  const [pegar, setPegar] = useState("");
  const [categoria, setCategoria] = useState("A");
  const [varios, setVarios] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("deliveries");
      if (storedData) {
        setVarios(JSON.parse(storedData));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("deliveries", JSON.stringify(varios));
    }
  }, [varios]);

  const Adicionar = () => {
    if (pegar.trim() === "") {
      alert("Por favor, insira um nome válido para a entrega!");
      return;
    }

    setVarios((prev) => {
      const existingItem = prev.find(
        (item) => item.nome === pegar && item.categoria === categoria
      );

      if (existingItem) {
        return prev.map((item) =>
          item.nome === pegar && item.categoria === categoria
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: Date.now(),
            nome: pegar,
            quantidade: 1,
            categoria,
            status: "pendente"
          }
        ];
      }
    });

    setPegar("");
  };

  const excluir = (id) => {
    setVarios((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const toggleStatus = (id) => {
    setVarios((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "pendente" ? "entregue" : "pendente"
            }
          : item
      )
    );
  };

  return (
    <Main>
      <H1>Entregas Harmonia</H1>
      <Section>
        <Input
          value={pegar}
          type="text"
          placeholder="Sua entrega"
          onChange={(e) => setPegar(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && Adicionar()}
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          style={{ color: "wheat" }}
        >
          <Opiton value="A"> A</Opiton>
          <Opiton value="B"> B</Opiton>
        </select>
        <CiCirclePlus
          size={40}
          onClick={Adicionar}
          style={{ color: "wheat" }}
        />
      </Section>

      {/* Lista de Categoria A */}
      <H2>Lista de Itens Bloco A</H2>
      <StyleSectio>
        <Lu>
          {varios
            .filter((item) => item.categoria === "A")
            .map((item) => (
              <Table key={item.id}>
                <div>
                  <input
                    type="checkbox"
                    checked={item.status === "entregue"}
                    onChange={() => toggleStatus(item.id)}
                  />
                  {item.nome} <strong>({item.quantidade})</strong> -
                  <Span onClick={() => excluir(item.id)}>
                    <FaRegTrashCan />
                    <span
                      style={{
                        color: item.status === "entregue" ? "green" : "red",
                        border: "none"
                      }}
                    >
                      {item.status}
                    </span>
                  </Span>
                </div>
              </Table>
            ))}
        </Lu>
      </StyleSectio>

      {/* Lista de Categoria B */}
      <H2>Lista de Itens Bloco B</H2>
      <StyleSectio>
        <Lu>
          {varios
            .filter((item) => item.categoria === "B")
            .map((item) => (
              <Table key={item.id}>
                <div>
                  <input
                    type="checkbox"
                    checked={item.status === "entregue"}
                    onChange={() => toggleStatus(item.id)}
                  />
                  {item.nome} <strong>({item.quantidade})</strong> -
                  <span
                    style={{ color: item.status === "entregue" ? "green" : "red" }}
                  >
                    {item.status}
                  </span>
                  <Span onClick={() => excluir(item.id)}>
                    <FaRegTrashCan />
                  </Span>
                </div>
              </Table>
            ))}
        </Lu>
      </StyleSectio>
    </Main>
  );
};